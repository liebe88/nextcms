import styles from '../../styles/Home.module.scss'

export default function BlogId({ blog }) {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>{blog.title}</h1>
      <p className={styles.publishedAt}>{blog.publishedAt}</p>
      <div
        dangerouslySetInnerHTML={{
          __html: `${blog.body}`,
        }}
        className={styles.post}
      />
    </main>
  );
}

// pages/blog/[id].js
// export default function BlogId({ blog }) {
//   return (
//     <main>
//       <h1>{blog.title}</h1>
//       <p>{blog.publishedAt}</p>
//       <div
//         dangerouslySetInnerHTML={{
//           __html: `${blog.body}`,
//         }}
//       />
//     </main>
//   );
// }
// import styles from '../../styles/Home.module.scss'

// export default function BlogId({blog}) {
//   return (
//     <main className={styles.main}>
//       <h1 className={styles.title}>{blog.title}</h1>
//       <p className={styles.publishedAt}>{blog.publishedAt}</p>
//       <div
//         dangerouslySetInnerHTML={{
//           __html: `${blog.body}`,
//         }}
//         className={styles.post}
//       />
//     </main>
//   );
// }
// export const getStaticPaths = async () => {
//   const key = {
//     headers: { 'X-API-KEY': process.env.API_KEY },
//   };

//   const repos = await fetch('https://my-nextjs.microcms.io/api/v1/blog', key)
//     .then(res => res.json())
//     .catch(() => null);

//   const paths = repos.contents.map(repo => `/blog/${repo.id}`);
//   return { paths, fallback: false };
// };

// export const getStaticProps = async context => {
//   const id = context.params.id;

//   const key = {
//     headers: { 'X-API-KEY': process.env.API_KEY },
//   };

//   const data = await fetch(
//     'https://my-nextjs.microcms.io/api/v1/blog/' + id,
//     key,
//   )
//     .then(res => res.json())
//     .catch(() => null);

//   return {
//     props: {
//       blog: data,
//     },
//   };
// };