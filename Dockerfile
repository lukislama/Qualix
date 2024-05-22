FROM python:3
ENV JAVA_HOME=/opt/java/openjdk
COPY --from=eclipse-temurin:21 $JAVA_HOME $JAVA_HOME
ENV PATH="${JAVA_HOME}/bin:${PATH}"
ENV TZ="Europe/Prague"
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