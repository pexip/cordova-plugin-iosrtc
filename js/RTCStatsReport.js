class RTCStatsReport {
	constructor(data) {
		const arr = data || [];
		this.data = {};
		arr.forEach((el) => {
			this.data[el.reportId] = el;
		});
		this.size = arr.length;
	}

	entries() {
		return Object.getOwnPropertyNames(this.data).map((k) => [k, this.data[k]]).values();
	}

	keys() {
		return Object.getOwnPropertyNames(this.data).values();
	}

	values() {
		return Object.getOwnPropertyNames(this.data).map((k) => this.data[k]).values();
	}

	get(key) {
		return this.data[key];
	}
}

/**
 * Expose the RTCStatsReport class.
 */
module.exports = RTCStatsReport;
