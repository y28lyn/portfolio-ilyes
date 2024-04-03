interface ArticleProps {
  title: string;
  subtitle: string;
  desc: string;
  backgroundImageUrl: string;
}

const Article: React.FC<ArticleProps> = ({
  title,
  subtitle,
  desc,
  backgroundImageUrl,
}) => {
  return (
    <section className="overflow-hidden bg-white dark:bg-[#000302] pt-28 px-10 -mt-10">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid items-center grid-cols-1 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold leading-tight text-[#000302] dark:text-white sm:text-4xl lg:text-5xl">
              {title}
            </h2>
            <h3 className="mt-3 text-sm font-bold leading-tight text-gray-800 dark:text-gray-200 sm:text-md lg:text-lg">
              {subtitle}
            </h3>
            <p className="max-w-lg mt-3 text-xl leading-relaxed text-gray-600 dark:text-gray-400 md:mt-8">
              {desc}
            </p>
          </div>

          <div className="ml-10 md:mt-0 mt-8">
            <img
              className="w-full h-[110vh] xl:max-w-lg xl:mx-auto 2xl:origin-bottom 2xl:scale-110 rounded shadow object-cover"
              src={backgroundImageUrl}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Article;
