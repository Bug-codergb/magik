package com.magik.controller.comment;

import com.magik.annotation.LoginAuth;
import com.magik.dto.comment.CommentDTO;
import com.magik.result.R;
import com.magik.service.comment.CommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Date;

@RestController
@RequestMapping("/comment")
public class CommentController {
  @Autowired
  CommentService commentService;
  @LoginAuth
  @PostMapping("")
  public R<String> createComment(@RequestBody CommentDTO commentDTO ,@RequestAttribute("userId") String userId){
    System.out.println(commentDTO.getMId());
    String id= new Date().getTime()+"";
    commentDTO.setId(id);
    commentDTO.setUserId(userId);
    commentService.createComment(commentDTO);
    return R.ok("");
  }
}
