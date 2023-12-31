package neu.com.repository;

import neu.com.model.Document;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface DocumentRepository extends JpaRepository<Document, Long> {
    Optional<Document> findByDocumentTitleAndDocumentIdNot(String documentTitle, Long documentId);

    Optional<Document> findByDocumentTitle(String documentTitle);
}
