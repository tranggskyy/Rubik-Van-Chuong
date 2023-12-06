package neu.com.configuration.exception;

import org.springframework.http.HttpStatus;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class InvalidInputRequestException extends RuntimeException {

	private Integer errorCode;
	private Object[] params;

	public InvalidInputRequestException(String message, Object... params) {
		super(message);
		this.errorCode = HttpStatus.BAD_REQUEST.value();
		this.params = params;
	}

	public InvalidInputRequestException(Integer errorCode, String message) {
		super(message);
		this.errorCode = errorCode;
	}


}
