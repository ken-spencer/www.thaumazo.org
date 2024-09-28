import SeoMeta from "@/partials/SeoMeta";

import Markdown from "@kenstack/components/Markdown";

import UserIcon from "@heroicons/react/24/outline/UserCircleIcon";

import Image from "next/image";
import InfoTags from "./InfoTags";

import Social from "@/components/Social";

export default function Page({ data, defaultImage = null }) {
  return (
    <>
      <SeoMeta {...data} />
      <main>
        <div className="container">
          <div className="row justify-center">
            <div className="lg:col-7 md:col-9 mb-8 text-center">
              <h1 className="mb-4 text-h3"> {data.title} </h1>
              {data.image ? (
                <div className="flex justify-center mb-8">
                  <Image
                    {...data.image}
                    alt={data.image.alt || ""}
                    className="max-w-full max-h-full"
                  />
                </div>
              ) : (
                defaultImage
              )}

              <Markdown className="main-text mb-4" content={data.content} />

              {data.linkedin && (
                <div className="flex justify-end mb-8">
                  <Social linkedin={data.linkedin} />
                </div>
              )}
              {data.url && (
                <div className="mb-8 text-left">
                  <h3 className="text-h6">Url</h3>
                  <a href={data.url}>{data.url}</a>
                </div>
              )}
              <div className="mb-8">
                <InfoTags title="Roles" field={data.roles} />
              </div>

              <div className="mb-8">
                <InfoTags
                  title="Liaisons"
                  path="/community"
                  references="community/people"
                  field={data.liaison}
                />
              </div>

              <div className="mb-8">
                <InfoTags
                  title="Partners"
                  path="/partners"
                  references="partners/posts"
                  field={data.partners}
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}