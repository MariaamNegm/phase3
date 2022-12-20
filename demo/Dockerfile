FROM openjdk:19
ADD target/docker-spring-boot1.jar  app.jar
EXPOSE 8080
ENTRYPOINT ["java","-jar","app.jar"]