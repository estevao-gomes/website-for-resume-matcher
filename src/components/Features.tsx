interface Item {
    title: string;
    description: string;
    icon?: string;
  }
  
  export interface Props {
    title?: string;
    subtitle?: string;
    highlight?: string;
    items: Array<Array<Item>>;
  }

  export function Features({title, subtitle, highlight, items} : Props){
    return(
        <section className="scroll-mt-16" id="features">
            <div className="px-4 py-16 mx-auto max-w-6xl lg:px-8 lg:py-20">
                {
                (title || subtitle || highlight) && (
                    <div className="mb-10 md:mx-auto text-center md:mb-12 max-w-3xl">
                    {highlight && (
                        <p
                        className="text-base text-primary dark:text-blue-200 font-semibold tracking-wide uppercase">{highlight}</p>
                    )}
                    {title && (
                        <h2
                        className="text-4xl md:text-5xl font-bold leading-tighter tracking-tighter mb-4 font-heading">{title}</h2>
                    )}

                    {subtitle && (
                        <p className="max-w-3xl mx-auto sm:text-center text-xl text-muted dark:text-slate-400">{subtitle}</p>
                    )}
                    </div>
                )}
                <div className="grid mx-auto space-y-6 md:grid-cols-2 md:space-y-0">
                    {
                        items.map((subitems, index) => (
                        <div className="space-y-8 sm:px-8" key={index}>
                            {subitems.map(({ title, description, icon }, index) => (
                            <div className="flex flex-row max-w-md" key={index}>
                                <div className="mb-4 mr-4">
                                {/* <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary dark:bg-blue-700">
                                    {icon && <Icon name={icon} className="w-6 h-6 text-white icon-light" />}
                                </div> */}
                                </div>
                                <div>
                                    <h3 className="mb-3 text-xl font-bold">{title}</h3>
                                    <p className="text-muted dark:text-slate-400">{description}</p>
                                </div>
                            </div>
                            ))}
                        </div>
                        ))
                    }
                </div>
            </div>
            </section>
    )
  }