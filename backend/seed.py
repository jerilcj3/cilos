import cherrypy
import cherrypy_cors
import csv
from sqlalchemy import create_engine, MetaData
from sqlalchemy.orm import sessionmaker
from src.models.model import EnterpriseTable, OpportunityTable, ORBase
import traceback


class Seed(object):
    def __init__(self, db):
        self.engine = db
        self.Session = sessionmaker(bind=db)
        self.session = self.Session()

    def insert_to_enterprise_table(self):

        try:
            # Read data from the first CSV file (enterprise data)
            with open("/app/files/enterprise.csv", "r") as f:
                reader = csv.DictReader(f)
                enterprise_data = [row for row in reader]

                # Iterate through the list of dictionaries and create a new EnterpriseTable object for each row

                for row in enterprise_data:
                    enterprise = EnterpriseTable(
                        enterprise_id=row["Enterprise Id"],
                        name=row["Name"].lower(),
                        country=row["Country"].lower(),
                        created_date=row["Created Date"],
                        modified_date=row["Modified Date"],
                        business_development_manager=row[
                            "Business Development Manager"
                        ].lower(),
                        enterprise_type=row["Enterprise Type"].lower(),
                        partner_model=row["Partner Model"].lower(),
                    )
                    self.session.add(enterprise)
            self.session.commit()

        except:
            self.session.rollback()
            print("Error occured while seeding the enterprise table")
            traceback.print_exc()

    def insert_to_opportunity_table(self):

        try:
            # Read data from the second CSV file (opportunity data)
            with open("/app/files/opportunity.csv", "r") as f:
                reader = csv.DictReader(f)
                opportunity_data = [row for row in reader]

                # Iterate through the list of dictionaries and create a new OpportunityTable object for each row
                for row in opportunity_data:
                    if row["Enterprise Id"] == "null":
                        enterprise_id = None
                    else:
                        enterprise_id = int(row["Enterprise Id"].replace(",", ""))

                    if row["Meeting Date"] != "" and row["Meeting Date"] != "null":
                        meeting_date = row["Meeting Date"]

                    if row["Product"] == "null":
                        product = None
                    else:
                        product = row["Product"]

                    if row["No of Pax"] == "null":
                        no_of_pax = None
                    else:
                        no_of_pax = row["No of Pax"]

                    if row["Total Value"] == "null" or row["Total Value"] == "":
                        total_value = None
                    else:
                        total_value = int(float(row["Total Value"].replace(",", "")))

                    if (
                        row["Forecast No of Pax"] == "null"
                        or row["Forecast No of Pax"] == ""
                    ):
                        forecast_no_of_pax = None
                    else:
                        forecast_no_of_pax = int(row["Forecast No of Pax"])

                    if row["Forecast Value"] == "null" or row["Forecast Value"] == "":
                        forecast_value = None
                    else:
                        forecast_value = int(row["Forecast Value"].replace(",", ""))

                    if row["Bronze Status"] == "null":
                        bronze_status = None
                    else:
                        bronze_status = row["Bronze Status"]

                    if row["Silver Status"] == "null":
                        silver_status = None
                    else:
                        silver_status = row["Silver Status"]

                    if row["Gold Status"] == "null":
                        gold_status = None
                    else:
                        gold_status = row["Gold Status"]

                    if row["Sales Status"] == "null":
                        sales_status = None
                    else:
                        sales_status = row["Sales Status"]

                    if row["Closed"] == "null":
                        closed = None
                    else:
                        closed = row["Closed"]

                    if row["Close Date"] == "null":
                        closed_date = None
                    else:
                        closed_date = row["Close Date"]

                    if row["Close Reason"] == "null":
                        close_reason = None
                    else:
                        close_reason = row["Close Reason"]

                    if row["opportunityId"] == "null" or row["opportunityId"] == "":
                        opportunityId = None
                    else:
                        opportunityId = row["opportunityId"].replace(",", "")

                    if row["salesId"] == "null" or row["salesId"] == "":
                        salesId = None
                    else:
                        salesId = row["salesId"].replace(",", "")

                    opportunity = OpportunityTable(
                        cilos_id=row["CILOS Id"],
                        created_date=row["Created Date"],
                        modified_date=row["Modified Date"],
                        created_by=row["Created By"].lower(),
                        modified_by=row["Modified By"].lower(),
                        enterprise_id=enterprise_id,
                        enterprise_name=row["Enterprise Name"].lower(),
                        main_stage=row["Type"].lower(),
                        stage=row["Stage"].lower(),
                        status=row["Status"].lower(),
                        interest_associated_contact=row[
                            "Interest Associated Contact"
                        ].lower(),
                        interest_status=row["Interest Status"].lower(),
                        meeting_date=meeting_date,
                        meeting_start_time=row["Meeting Start Time"],
                        meeting_end_time=row["Meeting End Time"],
                        lead_status=row["Lead Status"].lower(),
                        opportunity_associated_contact=row[
                            "Opportunity Associated Contact"
                        ].lower(),
                        sales_associated_contact=row[
                            "Sales Associated Contact"
                        ].lower(),
                        product=product,
                        no_of_pax=no_of_pax,
                        total_value=total_value,
                        forecast_no_of_pax=forecast_no_of_pax,
                        forecast_value=forecast_value,
                        bronze_status=bronze_status,
                        silver_status=silver_status,
                        gold_status=gold_status,
                        sales_status=sales_status,
                        closed=closed,
                        closed_date=closed_date,
                        close_reason=close_reason,
                        opportunityId=opportunityId,
                        salesId=salesId,
                    )

                    self.session.add(opportunity)
            self.session.commit()

        except:
            self.session.rollback()
            print("Error occured while seeding the enterprise table")
            traceback.print_exc()

    def run_seed_scripts(self):

        try:
            self.insert_to_enterprise_table()
            self.insert_to_opportunity_table()
        except Exception as e:
            print("Error occured while seeding the database:", e)
            traceback.print_exc()


if __name__ == "__main__":
    # Create an instance of the create_engine function
    db = create_engine("postgresql://postgres:johnjose@db:5432/cilos", echo=True)
    ORBase.metadata.create_all(db)
    seed = Seed(db)
    seed.run_seed_scripts()
