FROM centos:7.6.1810
 
LABEL name="microsoft/mssql-server-linux"
LABEL version="14.0"
LABEL operating_system="centos:7.6.1810"
LABEL environment="production"
LABEL maintainer="yourname@testdomain.com"
 
RUN curl -o /etc/yum.repos.d/mssql-server.repo https://packages.microsoft.com/config/rhel/7/mssql-server-2017.repo
RUN yum install -y mssql-server
 
ENV PATH=${PATH}:/opt/mssql/bin
 
RUN mkdir -p /var/opt/mssql/data
RUN chmod -R g=u /var/opt/mssql /etc/passwd
 
EXPOSE 1433
 
CMD sqlservr