package sg.edu.nus.iss.devops;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
public class FriendsController {

    @Autowired
    FriendsRespository friendsRespository;

    @GetMapping("/friends")
    public List<Friends> index(){
        return friendsRespository.findAll();
    }

    

    

}