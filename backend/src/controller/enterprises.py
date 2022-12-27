""" 
This api returns the list of countries in the enterprise_table
"""

import cherrypy
import cherrypy_cors
import os
from src.models.model import EnterpriseTable
from sqlalchemy.exc import SQLAlchemyError

__all__ = ["Enterprises"]


class Enterprises(object):
    def __init__(self):
        pass

    @property
    def db(self):
        return cherrypy.request.db

    def query_database_for_enterprises_count(
        self, country, enterprise_type, business_development_manager
    ):
        results = []
        try:
            results = (
                self.db.query(EnterpriseTable.enterprise_id)
                .filter(
                    EnterpriseTable.country.contains(country),
                    EnterpriseTable.enterprise_type.contains(enterprise_type),
                    EnterpriseTable.business_development_manager.contains(
                        business_development_manager
                    ),
                )
                .distinct()
                .count()
            )

        except SQLAlchemyError as error:
            print(error)
            return {"error": "Error querying database"}

        return results

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

            results = self.query_database_for_enterprises_count(
                country, enterprise_type, business_development_manager
            )  # Call the query_database method

        return {"value": results}
