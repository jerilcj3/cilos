#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import os
import cherrypy
import tempfile
import src.controller.funnel
import src.controller.countries
import src.controller.enterprise_types
import src.controller.executives
import src.controller.enterprises
import src.controller.companies
import src.controller.statuses
import src.controller.products
from src.models.model import ORBase
from cp_sqlalchemy import SQLAlchemyTool, SQLAlchemyPlugin
import cherrypy_cors


class Server(object):
    def __init__(self):
        self._set_basic_config()
        self._setup()
        self._add_app()

    def _set_basic_config(self):
        self.base_dir = os.path.dirname(os.path.abspath(__file__))
        self.conf_path = os.path.join(self.base_dir, "conf")
        log_dir = os.path.join(self.base_dir, "logs")
        if not os.path.exists(log_dir):
            os.mkdir(log_dir)
        session_dir = os.path.join(tempfile.gettempdir(), "sessions")
        if not os.path.exists(session_dir):
            os.mkdir(session_dir)

    def _setup(self):

        cherrypy_cors.install()
        # Update the global settings for the HTTP server and engine
        cherrypy.config.update(os.path.join(self.conf_path, "server.conf"))

    def _add_app(self):

        cherrypy.tree.mount(
            src.controller.products.Products(),
            "/api/products",
            os.path.join(self.conf_path, "app.conf"),
        )

        cherrypy.tree.mount(
            src.controller.statuses.Statuses(),
            "/api/statuses",
            os.path.join(self.conf_path, "app.conf"),
        )

        cherrypy.tree.mount(
            src.controller.companies.Companies(),
            "/api/companies",
            os.path.join(self.conf_path, "app.conf"),
        )

        cherrypy.tree.mount(
            src.controller.enterprises.Enterprises(),
            "/api/enterprises",
            os.path.join(self.conf_path, "app.conf"),
        )

        cherrypy.tree.mount(
            src.controller.executives.Executives(),
            "/api/executives",
            os.path.join(self.conf_path, "app.conf"),
        )

        cherrypy.tree.mount(
            src.controller.enterprise_types.EnterpriseTypes(),
            "/api/enterprise_types",
            os.path.join(self.conf_path, "app.conf"),
        )

        cherrypy.tree.mount(
            src.controller.countries.Countries(),
            "/api/countries",
            os.path.join(self.conf_path, "app.conf"),
        )

        cherrypy.tree.mount(
            src.controller.funnel.Funnel(),
            "/api/funnel",
            os.path.join(self.conf_path, "app.conf"),
        )

    def run(self):
        engine = cherrypy.engine
        cherrypy.tools.db = SQLAlchemyTool()

        sqlalchemy_plugin = SQLAlchemyPlugin(
            engine, ORBase, "postgresql://postgres:johnjose@db:5432/cilos", echo=True
        )

        if hasattr(engine, "signal_handler"):
            engine.signal_handler.subscribe()

        if hasattr(engine, "console_control_handler"):
            engine.console_control_handler.subscribe()

        sqlalchemy_plugin.subscribe()
        sqlalchemy_plugin.create()

        engine.start()
        engine.block()


if __name__ == "__main__":
    Server().run()
