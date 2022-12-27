from sqlalchemy import (
    create_engine,
    Column,
    Integer,
    String,
    DateTime,
    Date,
    CheckConstraint,
)
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

__all__ = ["ORBase", "Campaign", "Token"]

ORBase = declarative_base()


class EnterpriseTable(ORBase):
    __tablename__ = "enterprise_table"
    id = Column(Integer, primary_key=True)
    enterprise_id = Column(Integer)
    name = Column(String)
    country = Column(String)
    created_date = Column(DateTime)
    modified_date = Column(DateTime)
    business_development_manager = Column(String)
    enterprise_type = Column(String)
    partner_model = Column(String)


class OpportunityTable(ORBase):
    __tablename__ = "opportunity_table"
    id = Column(Integer, primary_key=True)
    cilos_id = Column(Integer)
    created_date = Column(DateTime)
    modified_date = Column(DateTime)
    created_by = Column(String, nullable=True)
    modified_by = Column(String, nullable=True)
    enterprise_id = Column(Integer)
    enterprise_name = Column(String, nullable=True)
    main_stage = Column(String, nullable=True)
    stage = Column(String, nullable=True)
    status = Column(String, nullable=True)
    interest_associated_contact = Column(String, nullable=True)
    interest_status = Column(String, nullable=True)
    meeting_date = Column(DateTime)
    meeting_start_time = Column(String, nullable=True)
    meeting_end_time = Column(String, nullable=True)
    lead_status = Column(String, nullable=True)
    opportunity_associated_contact = Column(String, nullable=True)
    sales_associated_contact = Column(String, nullable=True)
    product = Column(String, nullable=True)
    no_of_pax = Column(Integer)
    total_value = Column(Integer)
    forecast_no_of_pax = Column(Integer)
    forecast_value = Column(Integer)
    bronze_status = Column(String, nullable=True)
    silver_status = Column(String, nullable=True)
    gold_status = Column(String, nullable=True)
    sales_status = Column(String, nullable=True)
    closed = Column(String, nullable=True)
    closed_date = Column(DateTime)
    close_reason = Column(String)
    opportunityId = Column(Integer)
    salesId = Column(Integer)
