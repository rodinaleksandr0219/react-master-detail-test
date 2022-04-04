import moment from 'moment';
import { OptionTypes } from './types';

export const getOptions = (data: any): OptionTypes[] => {
    const dates = data.map(e => e.publishedDate);
    const uniqueDates = [...new Set(dates)];
    const result = uniqueDates.map(date => {
        return {
            label: moment.unix(date).format('MMM DD, YYYY'),
            value: date
        }
    })

    result.unshift({label: 'All', value: 'all'});
    return result;
}