import { ReactElement } from "react";

interface CallToAction {
  text: string;
  href: string;
  icon?: string;
}

export interface Props {
  description?: string;
  callToAction?: string | CallToAction;
  subtitle: ReactElement;
  title: ReactElement;
}

export function CalltoAction({
  title,
  description,
  callToAction,
  subtitle,
}: Props) {
  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <div className="max-w-3xl mx-auto text-center p-6 hover:shadow-lg hover:shadow-blue-600 rounded-md shadow-xl dark:border dark:border-slate-600">
            {title && (
              <h2 className="text-4xl md:text-4xl font-bold leading-tighter tracking-tighter mb-4 font-heading">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-xl text-muted dark:text-slate-400">
                {subtitle}
              </p>
            )}
            {typeof callToAction === "string" ? (
              <>{callToAction}</>
            ) : (
              callToAction &&
              callToAction.text &&
              callToAction.href && (
                <div className="mt-6 max-w-xs mx-auto">
                  <a
                    className="btn btn-primary w-full hover:shadow-md hover:shadow-pink-600 sm:w-auto bg-gradient-to-r from-teal-400 via-sky-600 to-blue-700"
                    href={callToAction.href}
                    target="_blank"
                    rel="noopener"
                  >
                    {/* {callToAction.icon && (
                    <Icon
                      name={callToAction.icon}
                      className="w-5 h-5 mr-1 -ml-1.5"
                    />
                  )} */}
                    {callToAction.text}
                  </a>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
