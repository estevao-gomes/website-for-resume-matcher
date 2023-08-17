interface Item {
    title?: string;
    description?: string;
    icon?: string;
  }
  
  export interface Props {
    title?: string;
    subtitle?: string;
    highlight?: string;
    items: Array<Item>;
  }

export function Features2({title, subtitle, highlight, items}:Props){
    return(
        <section className="relative">
            <div className="absolute inset-0 bg-blue-50 dark:bg-slate-800 pointer-events-none mb-32" aria-hidden="true"></div>
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 -mb-12">
                <div className="py-4 pt-8 sm:py-6 lg:py-8 lg:pt-12">
                {
                    (title || subtitle || highlight) && (
                    <div className="mb-8 md:mx-auto text-center max-w-3xl">
                        {highlight && (
                        <p
                            className="text-base text-primary dark:text-blue-200 font-semibold tracking-wide uppercase">{highlight}</p>
                        )}
                        {title && (
                        <h2
                            className="text-4xl md:text-5xl font-bold leading-tighter tracking-tighter mb-4 font-heading">{title}</h2>
                        )}

                        {subtitle && (
                        <p
                            className="max-w-3xl mx-auto sm:text-center text-xl text-muted dark:text-slate-400">{subtitle}</p>
                        )}
                    </div>
                    )
                }
                <div className={`grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-12 dark:text-white items-stretch`}>
                    {
                    items.map(({ title, description, icon }, index) => (
                        <div className="relative flex flex-col p-6 bg-white dark:bg-slate-900 rounded shadow-lg hover:shadow-md transition border border-transparent dark:border-slate-800" key={index}>
                        <div className="flex items-center">
                            {/* <Icon name={icon} className="w-10 h-10" /> */}
                            <div className="ml-4 text-xl font-bold">{title}</div>
                        </div>
                        {description && <p className="text-muted dark:text-gray-400 text-md mt-4">{description} </p>}
                        </div>
                    ))
                    }
                </div>
                </div>
            </div>
            </section>
    )
}