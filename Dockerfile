FROM eclipse-temurin:17
RUN set -xe \
    && apt-get update -y \
    && apt-get install -y python3-pip
RUN pip install --no-cache-dir --upgrade pip && \
    pip install --no-cache-dir LAMP-core && \
    pip install --no-cache-dir matplotlib
RUN mkdir generated_visualizations
COPY target/*.jar app.jar
COPY src/main/resources/python/test_connection.py .
COPY src/main/resources/python/get_study_participants.py .
COPY src/main/resources/python/get_participant_last_data_time.py .
COPY src/main/resources/python/download_and_visualize_data.py .
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "/app.jar"]
