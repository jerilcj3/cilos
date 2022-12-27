select * from enterprise_table;

select * from opportunity_table;

select COUNT(*)
from (
        select *
        from enterprise_table
        where
            business_development_manager like '%Rajesh%'
            and country like '%india%'
            and enterprise_type like '%ENT%'
    ) t
SELECT COUNT(*)
FROM (
        SELECT
            e.name,
            e.country,
            e.created_date,
            e.business_development_manager,
            e.enterprise_type,
            o.created_by,
            o.enterprise_name,
            o.stage,
            o.status,
            o.interest_status,
            o.lead_status,
            o.product,
            o.no_of_pax,
            o.total_value,
            o.forecast_no_of_pax,
            o.forecast_value,
            o.bronze_status,
            o.silver_status,
            o.gold_status,
            o.sales_status,
            o.closed
        FROM
            enterprise_table e
            JOIN opportunity_table o ON e.enterprise_id = o.enterprise_id
        WHERE
            e.country LIKE '%india%'
            AND e.enterprise_type LIKE '%SME%'
            and e.business_development_manager LIKE '%Rajesh%'
            and o.stage = 'Interest'
    ) t
SELECT COUNT(*)
FROM (
        SELECT
            e.name,
            e.country,
            e.created_date,
            e.business_development_manager,
            e.enterprise_type,
            o.created_by,
            o.enterprise_name,
            o.stage,
            o.status,
            o.interest_status,
            o.lead_status,
            o.product,
            o.no_of_pax,
            o.total_value,
            o.forecast_no_of_pax,
            o.forecast_value,
            o.bronze_status,
            o.silver_status,
            o.gold_status,
            o.sales_status,
            o.closed
        FROM
            enterprise_table e
            JOIN opportunity_table o ON e.enterprise_id = o.enterprise_id
        WHERE
            e.country LIKE '%india%'
            AND e.enterprise_type LIKE '%SME%'
            and e.business_development_manager LIKE '%Rajesh%'
            and o.stage = 'Interest'
            and o.status = 'Discovery Call Not Started'
    ) t
SELECT COUNT(*)
FROM (
        SELECT
            e.name,
            e.country,
            e.created_date,
            e.business_development_manager,
            e.enterprise_type,
            o.created_by,
            o.enterprise_name,
            o.stage,
            o.status,
            o.interest_status,
            o.lead_status,
            o.product,
            o.no_of_pax,
            o.total_value,
            o.forecast_no_of_pax,
            o.forecast_value,
            o.bronze_status,
            o.silver_status,
            o.gold_status,
            o.sales_status,
            o.closed
        FROM
            enterprise_table e
            JOIN opportunity_table o ON e.enterprise_id = o.enterprise_id
        WHERE
            e.country LIKE '%india%'
            AND e.enterprise_type LIKE '%SME%'
            and e.business_development_manager LIKE '%Rajesh%'
            and o.stage = 'Interest'
            and o.status = 'Discovery Call In Progress'
    ) t
SELECT COUNT(*)
FROM (
        SELECT
            e.name,
            e.country,
            e.created_date,
            e.business_development_manager,
            e.enterprise_type,
            o.created_by,
            o.enterprise_name,
            o.stage,
            o.status,
            o.interest_status,
            o.lead_status,
            o.product,
            o.no_of_pax,
            o.total_value,
            o.forecast_no_of_pax,
            o.forecast_value,
            o.bronze_status,
            o.silver_status,
            o.gold_status,
            o.sales_status,
            o.closed
        FROM
            enterprise_table e
            JOIN opportunity_table o ON e.enterprise_id = o.enterprise_id
        WHERE
            e.country LIKE '%india%'
            AND e.enterprise_type LIKE '%SME%'
            and e.business_development_manager LIKE '%Rajesh%'
            and o.stage = 'Interest'
            and o.status = 'Discovery Call Completed'
    ) t
SELECT COUNT(*)
FROM (
        SELECT
            e.name,
            e.country,
            e.created_date,
            e.business_development_manager,
            e.enterprise_type,
            o.created_by,
            o.enterprise_name,
            o.stage,
            o.status,
            o.interest_status,
            o.lead_status,
            o.product,
            o.no_of_pax,
            o.total_value,
            o.forecast_no_of_pax,
            o.forecast_value,
            o.bronze_status,
            o.silver_status,
            o.gold_status,
            o.sales_status,
            o.closed
        FROM
            enterprise_table e
            JOIN opportunity_table o ON e.enterprise_id = o.enterprise_id
        WHERE
            e.country LIKE '%india%'
            AND e.enterprise_type LIKE '%SME%'
            and e.business_development_manager LIKE '%Rajesh%'
            and o.stage = 'Lead'
    ) t
SELECT COUNT(*)
FROM (
        SELECT
            e.name,
            e.country,
            e.created_date,
            e.business_development_manager,
            e.enterprise_type,
            o.created_by,
            o.enterprise_name,
            o.stage,
            o.status,
            o.interest_status,
            o.lead_status,
            o.product,
            o.no_of_pax,
            o.total_value,
            o.forecast_no_of_pax,
            o.forecast_value,
            o.bronze_status,
            o.silver_status,
            o.gold_status,
            o.sales_status,
            o.closed
        FROM
            enterprise_table e
            JOIN opportunity_table o ON e.enterprise_id = o.enterprise_id
        WHERE
            e.country LIKE '%india%'
            AND e.enterprise_type LIKE '%SME%'
            and e.business_development_manager LIKE '%Rajesh%'
            and o.stage = 'Lead'
            and o.status = 'Meeting Appointment Proposed'
    ) t
SELECT COUNT(*)
FROM (
        SELECT
            e.name,
            e.country,
            e.created_date,
            e.business_development_manager,
            e.enterprise_type,
            o.created_by,
            o.enterprise_name,
            o.stage,
            o.status,
            o.interest_status,
            o.lead_status,
            o.product,
            o.no_of_pax,
            o.total_value,
            o.forecast_no_of_pax,
            o.forecast_value,
            o.bronze_status,
            o.silver_status,
            o.gold_status,
            o.sales_status,
            o.closed
        FROM
            enterprise_table e
            JOIN opportunity_table o ON e.enterprise_id = o.enterprise_id
        WHERE
            e.country LIKE '%india%'
            AND e.enterprise_type LIKE '%SME%'
            and e.business_development_manager LIKE '%Rajesh%'
            and o.stage = 'Lead'
            and o.status = 'Meeting Appointment Confirmed'
    ) t
SELECT COUNT(*)
FROM (
        SELECT
            e.name,
            e.country,
            e.created_date,
            e.business_development_manager,
            e.enterprise_type,
            o.created_by,
            o.enterprise_name,
            o.stage,
            o.status,
            o.interest_status,
            o.lead_status,
            o.product,
            o.no_of_pax,
            o.total_value,
            o.forecast_no_of_pax,
            o.forecast_value,
            o.bronze_status,
            o.silver_status,
            o.gold_status,
            o.sales_status,
            o.closed
        FROM
            enterprise_table e
            JOIN opportunity_table o ON e.enterprise_id = o.enterprise_id
        WHERE
            e.country LIKE '%india%'
            AND e.enterprise_type LIKE '%SME%'
            and e.business_development_manager LIKE '%Rajesh%'
            and o.stage = 'Bronze'
    ) t
SELECT COUNT(*)
FROM (
        SELECT
            e.name,
            e.country,
            e.created_date,
            e.business_development_manager,
            e.enterprise_type,
            o.created_by,
            o.enterprise_name,
            o.stage,
            o.status,
            o.interest_status,
            o.lead_status,
            o.product,
            o.no_of_pax,
            o.total_value,
            o.forecast_no_of_pax,
            o.forecast_value,
            o.bronze_status,
            o.silver_status,
            o.gold_status,
            o.sales_status,
            o.closed
        FROM
            enterprise_table e
            JOIN opportunity_table o ON e.enterprise_id = o.enterprise_id
        WHERE
            e.country LIKE '%india%'
            AND e.enterprise_type LIKE '%SME%'
            and e.business_development_manager LIKE '%Rajesh%'
            and o.stage = 'Bronze'
            and o.status = 'Solutioning Meeting not Started'
    ) t
SELECT COUNT(*)
FROM (
        SELECT
            e.name,
            e.country,
            e.created_date,
            e.business_development_manager,
            e.enterprise_type,
            o.created_by,
            o.enterprise_name,
            o.stage,
            o.status,
            o.interest_status,
            o.lead_status,
            o.product,
            o.no_of_pax,
            o.total_value,
            o.forecast_no_of_pax,
            o.forecast_value,
            o.bronze_status,
            o.silver_status,
            o.gold_status,
            o.sales_status,
            o.closed
        FROM
            enterprise_table e
            JOIN opportunity_table o ON e.enterprise_id = o.enterprise_id
        WHERE
            e.country LIKE '%india%'
            AND e.enterprise_type LIKE '%SME%'
            and e.business_development_manager LIKE '%Rajesh%'
            and o.stage = 'Bronze'
            and o.status = 'Solutioning Meeting In-Progress'
    ) t
SELECT COUNT(*)
FROM (
        SELECT
            e.name,
            e.country,
            e.created_date,
            e.business_development_manager,
            e.enterprise_type,
            o.created_by,
            o.enterprise_name,
            o.stage,
            o.status,
            o.interest_status,
            o.lead_status,
            o.product,
            o.no_of_pax,
            o.total_value,
            o.forecast_no_of_pax,
            o.forecast_value,
            o.bronze_status,
            o.silver_status,
            o.gold_status,
            o.sales_status,
            o.closed
        FROM
            enterprise_table e
            JOIN opportunity_table o ON e.enterprise_id = o.enterprise_id
        WHERE
            e.country LIKE '%india%'
            AND e.enterprise_type LIKE '%SME%'
            and e.business_development_manager LIKE '%Rajesh%'
            and o.stage = 'Bronze'
            and o.status = 'Solutioning Meeting Completed'
    ) t
SELECT COUNT(*)
FROM (
        SELECT
            e.name,
            e.country,
            e.created_date,
            e.business_development_manager,
            e.enterprise_type,
            o.created_by,
            o.enterprise_name,
            o.stage,
            o.status,
            o.interest_status,
            o.lead_status,
            o.product,
            o.no_of_pax,
            o.total_value,
            o.forecast_no_of_pax,
            o.forecast_value,
            o.bronze_status,
            o.silver_status,
            o.gold_status,
            o.sales_status,
            o.closed
        FROM
            enterprise_table e
            JOIN opportunity_table o ON e.enterprise_id = o.enterprise_id
        WHERE
            e.country LIKE '%india%'
            AND e.enterprise_type LIKE '%SME%'
            and e.business_development_manager LIKE '%Rajesh%'
            and o.stage = 'Silver'
    ) t
SELECT COUNT(*)
FROM (
        SELECT
            e.name,
            e.country,
            e.created_date,
            e.business_development_manager,
            e.enterprise_type,
            o.created_by,
            o.enterprise_name,
            o.stage,
            o.status,
            o.interest_status,
            o.lead_status,
            o.product,
            o.no_of_pax,
            o.total_value,
            o.forecast_no_of_pax,
            o.forecast_value,
            o.bronze_status,
            o.silver_status,
            o.gold_status,
            o.sales_status,
            o.closed
        FROM
            enterprise_table e
            JOIN opportunity_table o ON e.enterprise_id = o.enterprise_id
        WHERE
            e.country LIKE '%india%'
            AND e.enterprise_type LIKE '%SME%'
            and e.business_development_manager LIKE '%Rajesh%'
            and o.stage = 'Silver'
            and o.status = 'Draft Proposal Not Prepared/ Draft MOA Not Prepared'
    ) t
SELECT COUNT(*)
FROM (
        SELECT
            e.name,
            e.country,
            e.created_date,
            e.business_development_manager,
            e.enterprise_type,
            o.created_by,
            o.enterprise_name,
            o.stage,
            o.status,
            o.interest_status,
            o.lead_status,
            o.product,
            o.no_of_pax,
            o.total_value,
            o.forecast_no_of_pax,
            o.forecast_value,
            o.bronze_status,
            o.silver_status,
            o.gold_status,
            o.sales_status,
            o.closed
        FROM
            enterprise_table e
            JOIN opportunity_table o ON e.enterprise_id = o.enterprise_id
        WHERE
            e.country LIKE '%india%'
            AND e.enterprise_type LIKE '%SME%'
            and e.business_development_manager LIKE '%Rajesh%'
            and o.stage = 'Silver'
            and o.status = 'Draft Proposal In-Progress/ Draft MOA In-Progress'
    ) t
SELECT COUNT(*)
FROM (
        SELECT
            e.name,
            e.country,
            e.created_date,
            e.business_development_manager,
            e.enterprise_type,
            o.created_by,
            o.enterprise_name,
            o.stage,
            o.status,
            o.interest_status,
            o.lead_status,
            o.product,
            o.no_of_pax,
            o.total_value,
            o.forecast_no_of_pax,
            o.forecast_value,
            o.bronze_status,
            o.silver_status,
            o.gold_status,
            o.sales_status,
            o.closed
        FROM
            enterprise_table e
            JOIN opportunity_table o ON e.enterprise_id = o.enterprise_id
        WHERE
            e.country LIKE '%india%'
            AND e.enterprise_type LIKE '%SME%'
            and e.business_development_manager LIKE '%Rajesh%'
            and o.stage = 'Silver'
            and o.status = 'Draft Proposal Submitted/ Draft MOA Submitted'
    ) t
SELECT COUNT(*)
FROM (
        SELECT
            e.name,
            e.country,
            e.created_date,
            e.business_development_manager,
            e.enterprise_type,
            o.created_by,
            o.enterprise_name,
            o.stage,
            o.status,
            o.interest_status,
            o.lead_status,
            o.product,
            o.no_of_pax,
            o.total_value,
            o.forecast_no_of_pax,
            o.forecast_value,
            o.bronze_status,
            o.silver_status,
            o.gold_status,
            o.sales_status,
            o.closed
        FROM
            enterprise_table e
            JOIN opportunity_table o ON e.enterprise_id = o.enterprise_id
        WHERE
            e.country LIKE '%india%'
            AND e.enterprise_type LIKE '%SME%'
            and e.business_development_manager LIKE '%Rajesh%'
            and o.stage = 'Gold'
    ) t
SELECT COUNT(*)
FROM (
        SELECT
            e.name,
            e.country,
            e.created_date,
            e.business_development_manager,
            e.enterprise_type,
            o.created_by,
            o.enterprise_name,
            o.stage,
            o.status,
            o.interest_status,
            o.lead_status,
            o.product,
            o.no_of_pax,
            o.total_value,
            o.forecast_no_of_pax,
            o.forecast_value,
            o.bronze_status,
            o.silver_status,
            o.gold_status,
            o.sales_status,
            o.closed
        FROM
            enterprise_table e
            JOIN opportunity_table o ON e.enterprise_id = o.enterprise_id
        WHERE
            e.country LIKE '%india%'
            AND e.enterprise_type LIKE '%SME%'
            and e.business_development_manager LIKE '%Rajesh%'
            and o.stage = 'Gold'
            and o.status = 'Draft Proposal In-Review/ Draft MOA In-Review'
    ) t
SELECT COUNT(*)
FROM (
        SELECT
            e.name,
            e.country,
            e.created_date,
            e.business_development_manager,
            e.enterprise_type,
            o.created_by,
            o.enterprise_name,
            o.stage,
            o.status,
            o.interest_status,
            o.lead_status,
            o.product,
            o.no_of_pax,
            o.total_value,
            o.forecast_no_of_pax,
            o.forecast_value,
            o.bronze_status,
            o.silver_status,
            o.gold_status,
            o.sales_status,
            o.closed
        FROM
            enterprise_table e
            JOIN opportunity_table o ON e.enterprise_id = o.enterprise_id
        WHERE
            e.country LIKE '%india%'
            AND e.enterprise_type LIKE '%SME%'
            and e.business_development_manager LIKE '%Rajesh%'
            and o.stage = 'Gold'
            and o.status = 'Final Proposal Submitted / MOA Terms Agreed'
    ) t