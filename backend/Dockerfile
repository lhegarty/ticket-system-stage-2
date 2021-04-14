#create dockerfile where it does maven build as stage 1 and then run using java-jar as stage 2
# pull maven base image
FROM maven:3.8.1-openjdk-11 as build-stage

# set working directory
WORKDIR /app

# copy source code
COPY src/ ./src

# copy pom.xml
COPY pom.xml ./

# maven build step
RUN mvn clean compile install

# stage 2
FROM openjdk:11.0.10-jdk

# set working directory
WORKDIR /app

# copy target directory from stage 1
COPY --from=build-stage /app/target/ ./target

ENV JAR_FILE=/app/target/*.jar

ENTRYPOINT java -jar ${JAR_FILE}
