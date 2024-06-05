package com.magik.dto.moment;

import com.magik.bean.Moment;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class MomentDTO extends Moment {
  private List<String> filelist;
  private String userId;
}
