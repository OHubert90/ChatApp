package backend;

import org.springframework.data.mongodb.repository.MongoRepository;
import backend.Message;
import java.util.List;

public interface MessageRepository extends MongoRepository<Message, String> {
    List<Message> findBySenderAndReceiver(String sender, String receiver);
}
