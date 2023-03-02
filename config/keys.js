const keys = {
	development: {
		// Request data encoded with this key
		encodeKey: "F27D5C9927726BCEFE7510B1BDD3D137",
		jwtSecret: "a1=Dn}%F/k/@Z`v^von]sr_3",
		saltRounds: 10,
		myPlaintextPassword: "s5//P8$$ctLD"
	},
	production: {
		encodeKey: "F27D5C9927726BCEFE7510B1BDD3D137",
		jwtSecret: "a1=Dn}%F/k/@Z`v^von]sr_3",
		saltRounds: 10,
		myPlaintextPassword: "s5//P8$$ctLD"
	}
};

module.exports = keys;
