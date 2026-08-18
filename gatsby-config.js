module.exports = {
  siteMetadata: {
    title: `Anna Gol — Pracownia Architektury`,
    description: `Autorska pracownia architektoniczna. Domy jednorodzinne, zespoły mieszkaniowe i obiekty użyteczności publicznej — od koncepcji po nadzór autorski.`,
    siteUrl: `https://architektgol.pl`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
  ],
};
