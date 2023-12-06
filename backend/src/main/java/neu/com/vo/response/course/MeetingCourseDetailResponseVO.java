package neu.com.vo.response.course;

import lombok.Data;
import lombok.experimental.SuperBuilder;
import neu.com.vo.response.ClassDetailResponseVO;

import java.util.List;

@Data
@SuperBuilder
public class MeetingCourseDetailResponseVO extends CourseDetailResponseVO{
    //Add Classes
    private List<ClassDetailResponseVO> classVos;
    private List<UserResponseVO> waitingStudents;
}
