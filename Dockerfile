FROM eclipse-temurin:17
RUN set -xe \
    && apt-get update -y \
    && apt-get install -y python3-pip
RUN pip install --no-cache-dir --upgrade pip && \
    pip install --no-cache-dir LAMP-core
COPY target/*.jar app.jar
COPY src/main/resources/python/test_connection.py .
COPY src/main/resources/python/get_study_participants.py .
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "/app.jar"]
