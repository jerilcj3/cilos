""" 
This api returns the list of Business development managers in the enterprise_table
"""

import cherrypy
import cherrypy_cors
import os
from src.models.model import OpportunityTable
from sqlalchemy.exc import SQLAlchemyError


__all__ = ["Products"]


class Products(object):
    def __init__(self):
        pass

    @property
    def db(self):
        return cherrypy.request.db

    def query_database_for_products(self, enterprise_id, executive, form_status):

        query = self.db.query(
            OpportunityTable.product,
            OpportunityTable.no_of_pax,
            OpportunityTable.total_value,
            OpportunityTable.forecast_no_of_pax,
            OpportunityTable.forecast_value,
        ).filter(
            OpportunityTable.enterprise_id == enterprise_id,
            OpportunityTable.created_by.like("%{}%".format(executive)),
            OpportunityTable.product.isnot(None),
            # OpportunityTable.no_of_pax.isnot(None),
            # OpportunityTable.total_value.isnot(None),
            # OpportunityTable.forecast_no_of_pax.isnot(None),
            # OpportunityTable.forecast_value.isnot(None),
        )
        if form_status == "Active":
            query = query.filter(OpportunityTable.closed.is_(None))
        elif form_status == "Closed Won":
            query = query.filter(OpportunityTable.closed.contains("Closed Won"))
        elif form_status == "Closed Lost":
            query = query.filter(OpportunityTable.closed.contains("Closed Lost"))

        try:
            rows = query.all()
            result = [dict(row) for row in rows]

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

        if cherrypy.request.method == "POST":
            request_body = cherrypy.request.json
            enterprise_id = request_body.get("enterprise_id", "")
            executive = request_body.get("executive", "")
            form_status = request_body.get("status", "")

            results = self.query_database_for_products(
                enterprise_id, executive, form_status
            )  # Call the query_database method
            return {"value": results}
