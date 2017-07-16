FROM uroybd/python3-psycopg2-alpine

ADD app /serene/app
ADD docker/app/requirements.txt .
RUN pip install -r requirements.txt

ENTRYPOINT ["python", "/serene/app/run.py"]
