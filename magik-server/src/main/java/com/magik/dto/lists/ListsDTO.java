package com.magik.dto.lists;

import com.magik.bean.Lists;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ListsDTO extends Lists {
  private String userId;
  private String avatar;
  private String cover;
}
