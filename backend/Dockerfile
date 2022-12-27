FROM python:3.10.7

# create the necessary directories
RUN mkdir -p /app/conf /app/files /app/logs /app/src/controller /app/src/lib /app/src/models



# copy the necessary files
COPY requirements.txt /app/requirements.txt
RUN true
COPY server.py /app/server.py
RUN true
COPY conf/* /app/conf/
RUN true
COPY files/* /app/files/
RUN true
copy logs/* /app/logs/
RUN true
COPY src/controller/* /app/src/controller/
RUN true
COPY src/models/* /app/src/models/
RUN true
COPY src/query.sql /app/src/query.sql
RUN true
COPY seed.py /app/seed.py


# install the dependencies
RUN pip install -r /app/requirements.txt

# run the code
ENTRYPOINT ["python", "/app/server.py"]