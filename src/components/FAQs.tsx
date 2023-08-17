interface Item {
    question: string;
    answer: string;
  }
  
  export interface Props {
    title?: string;
    subtitle?: string;
    highlight?: string;
    items: Array<Array<Item>>;
  }

  export function FAQs({title, subtitle, highlight, items}:Props){
    return(
        <div className="px-4 py-16 mx-auto max-w-6xl lg:py-20">
            <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
                {
                (title || subtitle || highlight) && (
                    <div className="max-w-xl mb-10 md:mx-auto md:text-center lg:max-w-2xl md:mb-12">
                        {highlight && (
                            <p className="text-base text-primary dark:text-blue-200 font-semibold tracking-wide uppercase">
                                {highlight}
                            </p>
                        )}
                        {title && (
                            <h2 className="max-w-lg mb-4 text-3xl font-bold leading-none md:tracking-tight sm:text-4xl md:mx-auto font-heading">
                                {title}
                            </h2>
                        )}
                        {subtitle && <p className="max-w-3xl mx-auto text-xl text-muted dark:text-slate-400">{subtitle}</p>}
                    </div>
                )
                }
            </div>
            <div className="max-w-7xl sm:mx-auto">
                <div className="grid grid-cols-1 gap-x-8 gap-y-8 lg:gap-x-16 md:grid-cols-2">
                {
                    items &&
                    items.map((subitems, index) => (
                        <div className="space-y-8" key={index}>
                            {subitems.map(({ question, answer }, index) => (
                                <div key={index}>
                                    <h3 className="mb-4 text-xl font-bold">
                                        {/* <Icon name="tabler:arrow-down-right" className="w-7 h-7 text-primary inline-block" /> */}
                                        {question}
                                    </h3>
                                    {answer && <div className="text-muted dark:text-gray-400">{answer}</div>}
                                </div>
                            ))}
                        </div>
                    ))
                }
                </div>
            </div>
        </div>
    )}