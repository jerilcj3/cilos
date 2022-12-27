""" 
This api returns the count of statuses 


"""

import cherrypy
import cherrypy_cors
import os
from src.models.model import EnterpriseTable, OpportunityTable
from sqlalchemy.exc import SQLAlchemyError
from sqlalchemy import func

__all__ = ["Statuses"]
""" 
  get all enterprise_table.enterprise_id from enterprise_table where enterprise_table.country = india and enterprise_table.enterprise_type = 'sme'
"""


class Statuses(object):
    def __init__(self):
        pass

    @property
    def db(self):
        return cherrypy.request.db

    def query_database_for_enterprises(
        self,
        country,
        enterprise_type,
        business_development_manager,
        form_status,
        main_stage,
        stage,
        status,
    ):
        results = []

        query = (
            self.db.query(func.count(EnterpriseTable.enterprise_id))
            .filter(
                EnterpriseTable.enterprise_id == OpportunityTable.enterprise_id,
                EnterpriseTable.country.contains(country),
                EnterpriseTable.enterprise_type.contains(enterprise_type),
                EnterpriseTable.business_development_manager.contains(
                    business_development_manager
                ),
                OpportunityTable.main_stage.contains(main_stage),
                OpportunityTable.stage.contains(stage),
                OpportunityTable.status.contains(status),
            )
            .distinct()
        )
        # Check the value of form_status and add the appropriate filter
        if form_status == "Active":
            query = query.filter(OpportunityTable.closed.is_(None))

        elif form_status == "Closed Won":
            query = query.filter(OpportunityTable.closed.contains("Closed Won"))
        elif form_status == "Closed Lost":
            query = query.filter(OpportunityTable.closed.contains("Closed Lost"))

        # Execute the query and return the result
        try:
            result = query.scalar()
            return result

        except SQLAlchemyError as error:
            print(error)
            return {"error": "Error querying database"}

    @cherrypy.expose
    @cherrypy.tools.json_in()
    @cherrypy.tools.json_out()
    def index(self):
        if cherrypy.request.method == "OPTIONS":
            cherrypy_cors.preflight(allowed_methods=["POST"])

        results = {"error": "Invalid request method"}

        if cherrypy.request.method == "POST":
            request_body = cherrypy.request.json
            country = request_body.get("country", "")
            enterprise_type = request_body.get("enterprise_type", "")
            business_development_manager = request_body.get(
                "business_development_manager", ""
            )
            if business_development_manager == "none":
                business_development_manager = ""

            form_status = request_body.get("form_status", "")

            main_stage = request_body.get("main_stage", "")
            stage = request_body.get("stage", "")
            status = request_body.get("status", "")

            results = self.query_database_for_enterprises(
                country,
                enterprise_type,
                business_development_manager,
                form_status,
                main_stage,
                stage,
                status,
            )

            return {"value": results}
