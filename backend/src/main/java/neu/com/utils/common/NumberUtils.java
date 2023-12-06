package neu.com.utils.common;

import java.math.BigDecimal;
import java.text.DecimalFormat;

public class NumberUtils {

    public static final boolean isEquals(Long long1, Long long2) {
        if (long1 == null && long2 == null) {
            return true;
        }

        if (long1 == null || long2 == null) {
            return false;
        }

        return long1.equals(long2);
    }

    public static final BigDecimal max(BigDecimal n1, BigDecimal n2) {
        if (n1 == null && n2 == null) {
            return null;
        }
        if (n1 == null) {
            return n2;
        }
        if (n2 == null) {
            return n1;
        }
        return n1.compareTo(n2) > 0 ? n1 : n2;
    }

    public static final BigDecimal min(BigDecimal n1, BigDecimal n2) {
        if (n1 == null && n2 == null) {
            return null;
        }
        if (n1 == null) {
            return n2;
        }
        if (n2 == null) {
            return n1;
        }
        return n1.compareTo(n2) < 0 ? n1 : n2;
    }

    public static final String priceWithDecimal(BigDecimal price) {
        if (price == null) {
            return "";
        }
        DecimalFormat formatter = new DecimalFormat("###,###,###");
        return formatter.format(price);
    }
}
