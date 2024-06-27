package com.magik.dto.comment;

import com.magik.bean.Comment;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CommentDTO extends Comment {
  private String mId;
  private String userId;
}
