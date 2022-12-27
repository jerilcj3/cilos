""" 
This api returns the list of Enterprise Records

"""

import cherrypy
import cherrypy_cors
import os
from src.models.model import EnterpriseTable, OpportunityTable
from sqlalchemy.exc import SQLAlchemyError
from sqlalchemy import func
from collections import defaultdict


__all__ = ["Companies"]


class Companies(object):
    def __init__(self):
        pass

    @property
    def db(self):
        return cherrypy.request.db

    def query_database_for_enterprises(
        self, country, enterprise_type, business_development_manager, form_status
    ):

        query = self.db.query(
            OpportunityTable.enterprise_name, OpportunityTable.enterprise_id
        ).filter(
            EnterpriseTable.enterprise_id == OpportunityTable.enterprise_id,
            EnterpriseTable.country.contains(country),
            EnterpriseTable.enterprise_type.contains(enterprise_type),
            EnterpriseTable.business_development_manager.contains(
                business_development_manager
            ),
            OpportunityTable.product.isnot(None),
            # OpportunityTable.no_of_pax.isnot(None),
            # OpportunityTable.total_value.isnot(None),
            # OpportunityTable.forecast_no_of_pax.isnot(None),
            # OpportunityTable.forecast_value.isnot(None),
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
            result = query.all()
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

        """ if cherrypy.request.method == "GET":
            country = "india"
            enterprise_type = "sme"

            results = self.query_database_for_enterprises(
                country,
                enterprise_type,
            )
            counts = defaultdict(int)
            for result in results:
                enterprise_name = result["enterprise_name"]
                counts[enterprise_name] += 1

            formatted_results = []
            for enterprise_name, count in counts.items():
                formatted_result = {
                    "company": enterprise_name,
                    "selected": False,
                    "products_count": count,
                }
                formatted_results.append(formatted_result)

            return {"value": formatted_results} """

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

            results = self.query_database_for_enterprises(
                country,
                enterprise_type,
                business_development_manager,
                form_status,
            )
            counts = defaultdict(int)
            for result in results:
                enterprise_id = result["enterprise_id"]
                enterprise_name = result["enterprise_name"]
                counts[(enterprise_name, enterprise_id)] += 1

            formatted_results = []
            for (enterprise_name, enterprise_id), count in counts.items():
                formatted_result = {
                    "enterprise_id": enterprise_id,
                    "company": enterprise_name,
                    "selected": False,
                    "products_count": count,
                }
                formatted_results.append(formatted_result)

            return {"value": formatted_results}
