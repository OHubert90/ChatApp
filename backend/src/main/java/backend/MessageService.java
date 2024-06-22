package backend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MessageService {
    @Autowired
    private MessageRepository messageRepository;

    public List<Message> findMessagesBetweenUsers(String user1Id, String user2Id) {
        return messageRepository.findBySenderAndReceiver(user1Id, user2Id);
    }

    public Message saveMessage(Message message) {
        return messageRepository.save(message);
    }
}
