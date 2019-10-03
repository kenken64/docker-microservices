package sg.edu.nus.iss.devops;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class StartApplication {

    private static final Logger log = LoggerFactory.getLogger(StartApplication.class);

    @Autowired
    private FriendsRepository repository;

    public static void main(String[] args) {
        SpringApplication.run(StartApplication.class, args);
    }
}