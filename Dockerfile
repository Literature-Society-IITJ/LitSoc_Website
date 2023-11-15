FROM python:3.9-alpine

WORKDIR /app

ARG BUILD_DEPS="gcc python3-dev musl-dev libffi-dev jpeg-dev zlib-dev libjpeg libmagic"
RUN apk --no-cache add ${BUILD_DEPS}

RUN pip install --upgrade pip

COPY ./backend/requirements.txt ./requirements.txt

RUN PIP_USER=1 PIP_IGNORE_INSTALLED=1 pip install -r requirements.txt \
    && find /usr/local \
    \( -type d -a -name test -o -name tests \) \
    -o \( -type f -a -name '*.pyc' -o -name '*.pyo' \) \
    -exec rm -rf '{}' \+
