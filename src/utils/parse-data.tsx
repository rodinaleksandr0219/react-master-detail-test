import { PropTypes } from './types';

export const parseData = (data: Array<any>): Array<PropTypes> => {
	return data.map((item: any, key) => ({
		id: key,
		title: item["title"],
		body: item["body"],
		publishedDate: item["published_date"],
		level: item["level"],
		url_action: item["url_action"]
	}));
};