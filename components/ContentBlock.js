const ContentBlock = ({
  metaTitle,
  contentDetail,
  contentTextCta,
  contentHeader,
  isHeroContentBlock = false,
  contentTextCtaHref,
  metaTitleColor = "gray",
  contentBlockIcon,
}) => {
  const metaTitleColorStyle = {
    gray: "text-gray-400",
    purple: "text-purple-500",
    yellow: "text-yellow-300",
  };

  return (
    <div className="lg:ml-auto">
      <div className=" py-7 pb-24 lg:pb-0 lg:pr-4 2xl:pr-7 mx-auto">
        <div className="mb-8">{contentBlockIcon}</div>
        <h3
          className={`font-mono text-base mb-6 ${metaTitleColorStyle[metaTitleColor]}`}
        >
          {"//"} {metaTitle}
        </h3>
        <h2
          className={`font-medium text-gray-50 ${
            isHeroContentBlock ? "text-5xl md:text-7xl mb-10" : "text-5xl mb-6 "
          }`}
        >
          {contentHeader}
        </h2>
        <p
          className={`mb-9 text-gray-300 md:max-w-none lg:max-w-[430px] font-normal leading-tight ${
            isHeroContentBlock ? "text-xl md:text-3xl" : "text-2xl"
          }`}
        >
          {contentDetail}
        </p>

        <a
          href={contentTextCtaHref}
          className={
            isHeroContentBlock
              ? "inline-flex items-center justify-center text-center leading-none whitespace-nowrap font-medium rounded select-none overflow-hidden focus-ring text-lg  py-3 px-6 cursor-pointer bg-purple-500 border-purple-500 hover:bg-purple-600 text-gray-50 transition button-box-shadow"
              : "flex items-center text-xl font-semibold text-blue-400 after-arrow"
          }
        >
          {contentTextCta}
        </a>
      </div>
    </div>
  );
};

export default ContentBlock;
