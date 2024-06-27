package com.magik.mapper.comment;

import com.magik.dto.comment.CommentDTO;

public interface CommentMapper {
  public int createComment(CommentDTO commentDTO);
}
