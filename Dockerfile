FROM eclipse-temurin:17
ENV TZ="Europe/Prague"
RUN set -xe \
    && apt-get update -y \
    && apt-get install -y python3-pip
RUN pip install --no-cache-dir --upgrade pip && \
    pip install --no-cache-dir LAMP-core && \
    pip install --no-cache-dir matplotlib && \
    pip install --no-cache-dir pandas
RUN mkdir generated_visualizations
RUN mkdir data_cache
COPY target/*.jar app.jar
COPY src/main/resources/python/*.py .
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "/app.jar"]
