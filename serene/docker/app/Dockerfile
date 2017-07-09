FROM python:3.6.1-alpine

ADD app /srv/serene/app
ADD docker/app/requirements.txt .
RUN pip install -r requirements.txt

CMD ["/bin/ash"]
