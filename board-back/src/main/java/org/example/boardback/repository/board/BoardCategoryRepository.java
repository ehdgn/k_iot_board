package org.example.boardback.repository.board;

import org.example.boardback.entity.board.BoardCategory;
import org.example.boardback.entity.board.like.BoardLike;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BoardCategoryRepository extends JpaRepository<BoardCategory, Long> {
}
