package com.magik.service.comment;

import com.magik.dto.comment.CommentDTO;
import com.magik.mapper.comment.CommentMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CommentService {
  @Autowired
  CommentMapper commentMapper;
  public int createComment(CommentDTO commentDTO){
    return commentMapper.createComment(commentDTO);
  }
}
