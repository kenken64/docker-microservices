package sg.edu.nus.iss.devops;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.Assert.assertEquals;

@RunWith(SpringRunner.class)
@DataJpaTest
public class FriendsRepositoryTest {

    @Autowired
    private TestEntityManager entityManager;

    @Autowired
    private FriendsRepository repository;

    @Test
    public void testFindByName() {

        entityManager.persist(new Friends("Alex"));

        List<Friends> friends = repository.findByName("Alex");
        assertEquals(1, friends.size());

        assertThat(friends).extracting(Friends::getName).containsOnly("Alex");

    }

}