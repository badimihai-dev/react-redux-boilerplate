export default class StringUtil {
    /**
     * @param str string
     * @param separator string
     * @example
     */
    static splitBySeparator = (str, separator) => {
      return str.split(new RegExp(`(.*?${separator})`, 'g')).filter(Boolean);
    };
  }
  