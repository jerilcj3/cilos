""" 
This api returns the list of countries in the enterprise_table
"""

import cherrypy
import cherrypy_cors
import os
from src.models.model import EnterpriseTable
from sqlalchemy.exc import SQLAlchemyError

__all__ = ["Countries"]


class Countries(object):
    def __init__(self):
        pass

    @property
    def db(self):
        return cherrypy.request.db

    def query_database_for_countries(self):
        results = []
        try:
            rows = self.db.query(EnterpriseTable.country).distinct().all()
            results = [dict(row) for row in rows]
        except SQLAlchemyError as error:
            print(error)
            return {"error": "Error querying database"}

        return results

    @cherrypy.expose
    @cherrypy.tools.json_in()
    @cherrypy.tools.json_out()
    def index(self):
        if cherrypy.request.method == "OPTIONS":
            cherrypy_cors.preflight(allowed_methods=["GET"])

        if cherrypy.request.method == "GET":
            results = (
                self.query_database_for_countries()
            )  # Call the query_database method

        return results

        return {"country": results}
