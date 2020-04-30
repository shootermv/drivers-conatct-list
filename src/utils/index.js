import _ from 'lodash'

/**
  * @desc should format phone number string to 111-111-1111 format
  * @param string $num - the phone string we recieved from API
  * @return string - formatted phne number
*/
export const formatPhone = num => {
    if (!num) return;
    num = num.replace(/\.|\s+/g, '-')
    if (num.split('-').length === 3) {
        return num;
    }
    num = num.replace(/-/g,'');
    return `${num.slice(0,3)}-${num.slice(3,6)}-${num.slice(6)}`;
}



/**
  * @desc search for some string at every porpery inside array
  * @param array $collection - the array we want to search in
  * @param string $text - the text we are search for
  * @param string $exclude - some object field we want to exclude and NOT search where
  * @return array - results containng the string
*/
export function searchByText(collection, text, exclude) {
    text = _.toLower(text);
    return _.filter(collection, function(object) {
      return _(object).omit(exclude).some(function(string) {
        return _(string).toLower().includes(text);
      });
    });
}