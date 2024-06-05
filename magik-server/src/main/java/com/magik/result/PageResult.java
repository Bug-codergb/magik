package com.magik.result;
import com.github.pagehelper.Page;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class PageResult<T> {
  private int code;
  private String message;
  private Integer pageNum ;//当前第几页
  private Long total;   //总条数
  private Integer pages;   // 总页数
  private Page<T> rows;

  public static <K> PageResult<K> success(Page<K> pageData){
    PageResult<K> res = new PageResult<>(
            200,
            "success",
            pageData.getPageNum(),
            pageData.getTotal(),
            pageData.getPages(),
            pageData
    );
    return res;
  }
}