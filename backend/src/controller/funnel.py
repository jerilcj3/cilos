import cherrypy
import cherrypy_cors
import os
from src.models.model import EnterpriseTable
from src.models.model import OpportunityTable
from sqlalchemy.sql import select, func
from sqlalchemy.orm import join
from sqlalchemy.sql.expression import and_
from sqlalchemy.exc import SQLAlchemyError
from sqlalchemy.orm import aliased
from sqlalchemy.sql import text


__all__ = ["Funnel"]


class Funnel(object):
    def __init__(self):
        pass

    @property
    def db(self):
        return cherrypy.request.db

    def query_cilos(
        self,
        country,
        enterprise_type,
        business_development_manager,
        status,
        main_stage,
        stage,
    ):

        results = []
        try:
            query = self.db.query(func.count(EnterpriseTable.enterprise_id)).filter(
                EnterpriseTable.enterprise_id == OpportunityTable.enterprise_id,
                EnterpriseTable.country.contains(country),
                EnterpriseTable.enterprise_type.contains(enterprise_type),
                EnterpriseTable.business_development_manager.contains(
                    business_development_manager
                ),
                OpportunityTable.main_stage.contains(main_stage),
                OpportunityTable.stage.contains(stage),
            )

            if status != "Active":
                query = query.filter(OpportunityTable.closed.contains(status))
            else:
                query = query.filter(OpportunityTable.closed.is_(None))

            results = query.scalar()

        except SQLAlchemyError as error:
            print(error)
            return {"error": "Error querying database"}

        return results

    @cherrypy.expose
    @cherrypy.tools.json_in()
    @cherrypy.tools.json_out()
    def index(self):

        if cherrypy.request.method == "OPTIONS":
            """This is a request that browser sends in CORS prior to sending a real request
            so set up extra headers for a pre-flight OPTIONS request as shown below.
            So the below line is mandatory
            """
            cherrypy_cors.preflight(allowed_methods=["GET", "POST"])

        if cherrypy.request.method == "POST":

            request_body = cherrypy.request.json

            country = request_body.get("country", "")
            enterprise_type = request_body.get("enterprise_type", "")
            business_development_manager = request_body.get(
                "business_development_manager", ""
            )
            if business_development_manager == "none":
                business_development_manager = ""
            status = request_body.get("status", "")

            main_stage = request_body.get("main_stage", "")
            stage = request_body.get("stage", "")

            results = self.query_cilos(
                country,
                enterprise_type,
                business_development_manager,
                status,
                main_stage,
                stage,
            )

            return {"value": results}
