FROM uroybd/python3-psycopg2-alpine

ADD app /srv/serene/app
ADD docker/app/requirements.txt .
RUN pip install -r requirements.txt

ENTRYPOINT ["python", "/srv/serene/app/run.py"]
